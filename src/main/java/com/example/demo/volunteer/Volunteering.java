package com.example.demo.volunteer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Volunteering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 프로그램 등록 번호
    @Column(name = "progrm_regist_no")
    private Integer progrmRegistNo;
    // 봉사 제목
    @Column(name = "progrm_sj")
    private String progrmSj;

    // 모집 기관명 (나눔 주체명)
    @Column(name = "nanmmby_nm")
    private String nanmmbyNm;

    // 봉사 시작 일자 (YYYYMMDD 형식)
    @Column(name = "progrm_bgnde")
    private Integer progrmBgnde;

    // 봉사 종료 일자 (YYYYMMDD 형식)
    @Column(name = "progrm_endde")
    private Integer progrmEndde;

    // 모집 상태 (1: 모집대기, 2: 모집중, 3: 모집완료)
    @Column(name = "progrm_sttus_se")
    private Integer progrmSttusSe;

    // 시도 코드 (시도 단위의 코드)
    @Column(name = "sido_cd")
    private Integer sidoCd;

    // 시군구 코드 (시군구 단위의 코드)
    @Column(name = "gugun_cd")
    private Integer gugunCd;

    // 봉사 시작 시간 (24시간 형식)
    @Column(name = "act_begin_tm")
    private Integer actBeginTm;

    // 봉사 종료 시간 (24시간 형식)
    @Column(name = "act_end_tm")
    private Integer actEndTm;

    // 봉사 장소
    @Column(name = "act_place")
    private String actPlace;

    // 봉사 활동 URL
    @Column(name = "url")
    private String url;

    // 성인 참여 가능 여부 (Y: 가능, N: 불가)
    @Column(name = "adult_posbl_at")
    private String adultPosblAt;

    // 청소년 봉사 가능 여부 (Y: 가능, N: 불가)
    @Column(name = "yngbgs_posbl_at")
    private String yngbgsPosblAt;

    @Column(name = "notice_bgnde")
    private Integer noticeBgnde; // 모집시작일

    @Column(name = "notice_endde")
    private Integer noticeEndde; // 모집종료일

    @Column(name = "rcrit_nmpr")
    private Integer rcritNmpr; // 모집인원

    @Column(name = "act_wkdy")
    private String actWkdy; // 활동요일

    @Column(name = "app_total")
    private Integer appTotal; // 신청인원수

    @Column(name = "srvc_cl_code")
    private String srvcClCode; // 봉사분야

    @Column(name = "grp_posbl_at")
    private String grpPosblAt; // 단체가능여부

    @Column(name = "mnnst_nm")
    private String mnnstNm; // 모집기관(주관기관명)

    @Column(name = "area_lalo1")
    private String areaLalo1;

    @Column(name = "nanmmby_nm_admn")
    private String nanmmbyNmAdmn; // 담당자명

    @Column(name = "telno")
    private String telno; // 전화번호

    @Column(name = "post_adres")
    private String postAdres; // 담당자 주소

    @Column(name = "email")
    private String email; // 이메일

    @Lob
    @Column(name = "progrm_cn", columnDefinition = "TEXT")
    private String progrmCn; // 내용
}