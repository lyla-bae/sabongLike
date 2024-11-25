package com.example.demo.volunteer;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class VolunteeringService {

    @Autowired
    private VolunteeringRepository volunteeringRepository;

//    @Value("${volunteeringApiKeyDecoding}")
  //  private String volunteeringApiKeyDecoding;

    public void setInfo() {

        try {
            StringBuilder urlBuilder = new StringBuilder("http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "="+ URLEncoder.encode("vb52G3WJqnRQ7ECwTfXfSGQJY3AFx9yCfxGlDJGPgAiUVTu3g+qmq+8wZNLRKenbUiuGfuLPwmJHpxMb9SbYow==", "UTF-8")); /*Service Key*/
//            urlBuilder.append("&" + URLEncoder.encode("progrmRegistNo","UTF-8") + "=" + URLEncoder.encode("3043657", "UTF-8")); /*프로그램등록번호*/
            urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("9900", "UTF-8")); /*프로그램등록번호*/
            urlBuilder.append("&" + URLEncoder.encode("Keyword","UTF-8") + "=" + URLEncoder.encode(" ", "UTF-8")); /*프로그램등록번호*/
            urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*프로그램등록번호*/

            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();
//            System.out.println(sb.toString());



            // API 응답 데이터를 XML에서 JSON으로 변환
            JSONObject jsonObject = XML.toJSONObject(sb.toString());

            // 디버깅
//            System.out.println( "봉사서비스.getVltrAreaListApi() result : " + jsonObject  );

//            JSONArray items = jsonObject.getJSONArray("items");
            JSONArray jsonArray = jsonObject
                                    .getJSONObject("response")
                                    .getJSONObject("body")
                                    .getJSONObject("items")
                                    .getJSONArray("item");


            for (int i=0; i < jsonArray.length(); i++) {

                JSONObject item = jsonArray.getJSONObject(i);


                String progrmRegistNo = item.get("progrmRegistNo").toString();

                // DB에서 해당 데이터를 조회
                Optional<Volunteering> existingVolunteering = volunteeringRepository.findByProgrmRegistNo(progrmRegistNo);

                Volunteering volunteering = existingVolunteering.orElseGet(() -> new Volunteering());


                volunteering.setProgrmRegistNo(progrmRegistNo);
                volunteering.setProgrmSj(item.get("progrmSj").toString());
                volunteering.setNanmmbyNm(item.get("nanmmbyNm").toString());
                volunteering.setProgrmBgnde((Integer) item.get("progrmBgnde"));
                volunteering.setProgrmEndde((Integer) item.get("progrmEndde"));
                volunteering.setProgrmSttusSe((Integer) item.get("progrmSttusSe"));
                volunteering.setSidoCd((Integer) item.get("sidoCd"));
                volunteering.setGugunCd((Integer) item.get("gugunCd"));
                volunteering.setActBeginTm((Integer) item.get("actBeginTm"));
                volunteering.setActEndTm((Integer) item.get("actEndTm"));
                volunteering.setActPlace(item.get("actPlace").toString());
                volunteering.setUrl(item.get("url").toString());
                volunteering.setAdultPosblAt(item.get("adultPosblAt").toString());
                volunteering.setYngbgsPosblAt(item.get("yngbgsPosblAt").toString());




//                VolunteeringDto volunteeringDto = new VolunteeringDto();
//                volunteeringDto = VolunteeringDto.createDto(volunteering);
                volunteeringRepository.save(volunteering);
                System.out.println(item.get("actBeginTm"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void setDetailInfo(){
//
//            try {
//                // DB에 저장된 전체 리스트 조회
//                List<Volunteering> allVolunteering = volunteeringRepository.findAll();
//
//                for (Volunteering volunteering : allVolunteering) {
//                    String progrmRegistNo = volunteering.getProgrmRegistNo();
//
//                    // 상세 정보가 있는지 확인
//                    if (volunteering.getDetailInfo() != null) {
//                        System.out.println("이미 상세 정보가 있음: " + progrmRegistNo);
//                        continue; // 상세 정보가 있으면 건너뜀
//                    }
//
//                    // 상세 정보 API 요청 URL 구성
//                    StringBuilder detailUrlBuilder = new StringBuilder("http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getDetailInfo");
//                    detailUrlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + URLEncoder.encode("vb52G3WJqnRQ7ECwTfXfSGQJY3AFx9yCfxGlDJGPgAiUVTu3g+qmq+8wZNLRKenbUiuGfuLPwmJHpxMb9SbYow==", "UTF-8"));
//                    detailUrlBuilder.append("&" + URLEncoder.encode("progrmRegistNo", "UTF-8") + "=" + URLEncoder.encode(progrmRegistNo, "UTF-8"));
//
//                    URL detailUrl = new URL(detailUrlBuilder.toString());
//                    HttpURLConnection conn = (HttpURLConnection) detailUrl.openConnection();
//                    conn.setRequestMethod("GET");
//                    conn.setRequestProperty("Content-type", "application/json");
//                    System.out.println("Response code: " + conn.getResponseCode());
//
//                    BufferedReader rd;
//                    if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
//                        rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//                    } else {
//                        rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
//                    }
//
//                    StringBuilder sb = new StringBuilder();
//                    String line;
//                    while ((line = rd.readLine()) != null) {
//                        sb.append(line);
//                    }
//                    rd.close();
//                    conn.disconnect();
//
//                    // XML -> JSON 변환
//                    JSONObject jsonObject = XML.toJSONObject(sb.toString());
//
//                    // 상세 정보 처리
//                    JSONObject detailInfo = jsonObject
//                        .getJSONObject("response")
//                        .getJSONObject("body")
//                        .getJSONObject("item");
//
//                    // 필요한 상세 정보 매핑
//                    volunteering.setDetailInfo(detailInfo.get("detailField").toString()); // 예시: 'detailField'를 실제 필드로 대체
//                    volunteering.setAnotherDetail(detailInfo.get("anotherField").toString()); // 예시: 'anotherField'를 실제 필드로 대체
//
//                    // DB에 업데이트
//                    volunteeringRepository.save(volunteering);
//                    System.out.println("상세 정보 저장 완료: " + progrmRegistNo);
//                }
//
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//

    }




    public List<VolunteeringDto> getInfo() {
        return volunteeringRepository
            .findAll().stream()
            .map(info -> VolunteeringDto.createDto(info))
            .collect(Collectors.toList());
    }


    public List<VolunteeringDto> getInfoWithGugunCd(Integer location) {
        return volunteeringRepository
            .findByGugunCd(location).stream()
            .map(info -> VolunteeringDto.createDto(info))
            .collect(Collectors.toList());
    }

    public Page<VolunteeringDto> searchPrograms(
        String progrmSj, String nanmmbyNm, Integer progrmBgnde, Integer progrmEndde,
        List<Integer> sidoCd, List<Integer>  gugunCd, Integer actBeginTm, Integer actEndTm,
        String adultPosblAt, String yngbgsPosblAt,Boolean isOnline,
        int page, int size, String sortField, Sort.Direction direction) {

        Specification<Volunteering> spec = VolunteertingSpecification.filterByCriteria(
            progrmSj, nanmmbyNm, progrmBgnde, progrmEndde, sidoCd, gugunCd,
            actBeginTm, actEndTm, adultPosblAt, yngbgsPosblAt , isOnline);

        Sort sort = Sort.by(direction, sortField);
        Pageable pageable = PageRequest.of(page, size, sort);


        Page<Volunteering> volunteeringPage = volunteeringRepository.findAll(spec, pageable);

        return  volunteeringPage.map(VolunteeringDto::createDto);
    }
//de


}
