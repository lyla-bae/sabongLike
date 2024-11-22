package com.example.demo.volunteer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VolunteeringDto {

    private String progrmRegistNo;
    private String progrmSj;
    private String nanmmbyNm;
    private Integer progrmBgnde;
    private Integer  progrmEndde;
    private Integer progrmSttusSe;
    private Integer sidoCd;
    private Integer gugunCd;
    private Integer actBeginTm;
    private Integer actEndTm;
    private String actPlace;
    private String url;
    private String adultPosblAt;
    private String yngbgsPosblAt;



    public Volunteering toEntity() {
        Volunteering volunteering = new Volunteering();
        volunteering.setProgrmRegistNo(this.progrmRegistNo);
        volunteering.setProgrmSj(this.progrmSj);
        volunteering.setNanmmbyNm(this.nanmmbyNm);
        volunteering.setProgrmBgnde(this.progrmBgnde);
        volunteering.setProgrmEndde(this.progrmEndde);
        volunteering.setProgrmSttusSe(this.progrmSttusSe);
        volunteering.setSidoCd(this.sidoCd);
        volunteering.setGugunCd(this.gugunCd);
        volunteering.setActBeginTm(this.actBeginTm);
        volunteering.setActEndTm(this.actEndTm);
        volunteering.setActPlace(this.actPlace);
        volunteering.setUrl(this.url);
        volunteering.setAdultPosblAt(this.adultPosblAt);
        volunteering.setYngbgsPosblAt(this.yngbgsPosblAt);
        return volunteering;
    }

    public static VolunteeringDto createDto (Volunteering volunteering) {
        return new VolunteeringDto(
                volunteering.getProgrmRegistNo(),
                volunteering.getProgrmSj(),
                volunteering.getNanmmbyNm(),
                volunteering.getProgrmBgnde(),
                volunteering.getProgrmEndde(),
                volunteering.getProgrmSttusSe(),
                volunteering.getSidoCd(),
                volunteering.getGugunCd(),
                volunteering.getActBeginTm(),
                volunteering.getActEndTm(),
                volunteering.getActPlace(),
                volunteering.getUrl(),
                volunteering.getAdultPosblAt(),
                volunteering.getYngbgsPosblAt()
        );

    }

}
