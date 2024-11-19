package com.example.demo.volunteer;


import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class VolunteeringService {
    @Autowired
    private VolunteeringRepository volunteeringRepository;

    @Value("${volunteeringApiKeyDecoding}")
    private String volunteeringApiKeyDecoding;

    public void setInfo() {

        try {
            StringBuilder urlBuilder = new StringBuilder("http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "="+ URLEncoder.encode("vb52G3WJqnRQ7ECwTfXfSGQJY3AFx9yCfxGlDJGPgAiUVTu3g+qmq+8wZNLRKenbUiuGfuLPwmJHpxMb9SbYow==", "UTF-8")); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("100", "UTF-8")); /*프로그램등록번호*/
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
                String progrmSj = item.get("progrmSj").toString();
                String  nanmmbyNm = item.get("nanmmbyNm").toString();
                Integer progrmBgnde = (Integer) item.get("progrmBgnde");
                Integer progrmEndde =  (Integer)  item.get("progrmEndde") ;
                Integer  progrmSttusSe = (Integer) item.get("progrmSttusSe");
                Integer sidoCd = (Integer) item.get("sidoCd") ;
                Integer gugunCd = (Integer) item.get("gugunCd") ;
                Integer actBeginTm = (Integer) item.get("actBeginTm");
                Integer actEndTm = (Integer) item.get("actEndTm");
                String actPlace = item.get("actPlace").toString();
                String vUrl = item.get("url").toString();
                String adultPosblAt = item.get("adultPosblAt").toString();
                String yngbgsPosblAt = item.get("yngbgsPosblAt").toString();

                Volunteering volunteering = new Volunteering(null,
                        progrmRegistNo,progrmSj,nanmmbyNm,progrmBgnde,progrmEndde,progrmSttusSe,
                        sidoCd,gugunCd,actBeginTm,actEndTm,actPlace,vUrl,adultPosblAt,yngbgsPosblAt
                );

                volunteeringRepository.save(volunteering);
                System.out.println(item.get("actBeginTm"));
            }



        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public List<VolunteeringDto> getAllInfo() {
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

    public Volunteering getVolunteeringById(Long volunteeringId) {
        return volunteeringRepository
            .findById(volunteeringId).get();

    }

    public List<VolunteeringDto> getInfo() {
        return volunteeringRepository
            .findAll().stream()
            .map(info -> VolunteeringDto.createDto(info))
            .collect(Collectors.toList());
    }

    public Page<VolunteeringDto> searchPrograms(
        String progrmSj, String nanmmbyNm, Integer progrmBgnde, Integer progrmEndde,
        Integer sidoCd, Integer gugunCd, Integer actBeginTm, Integer actEndTm,
        String adultPosblAt, String yngbgsPosblAt,
        int page, int size, String sortField, Direction direction) {

        Specification<Volunteering> spec = VolunteertingSpecification.filterByCriteria(
            progrmSj, nanmmbyNm, progrmBgnde, progrmEndde, sidoCd, gugunCd,
            actBeginTm, actEndTm, adultPosblAt, yngbgsPosblAt);

        Sort sort = Sort.by(direction, sortField);
        Pageable pageable = PageRequest.of(page, size, sort);


        Page<Volunteering> volunteeringPage = volunteeringRepository.findAll(spec, pageable);

        return  volunteeringPage.map(VolunteeringDto::createDto);
    }
}
