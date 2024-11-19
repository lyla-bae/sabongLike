package com.example.demo.volunteer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/info")
public class VolunteeringController {

    @Autowired
    private VolunteeringService volunteeringService;

    @GetMapping("/get/all")
    public ResponseEntity<List<VolunteeringDto>> getAll() {
        List<VolunteeringDto> dtos = volunteeringService.getInfo();
        return ResponseEntity.ok().body(dtos);
    }

    @GetMapping("/set")
    public String set() {
        volunteeringService.setInfo();
        return "ok";

    }

    @GetMapping("/get")
    public Page<VolunteeringDto> getPrograms(
        @RequestParam(required = false) String progrmSj,
        @RequestParam(required = false) String nanmmbyNm,
        @RequestParam(required = false) Integer progrmBgnde,
        @RequestParam(required = false) Integer progrmEndde,
        @RequestParam(required = false) Integer sidoCd,
        @RequestParam(required = false) Integer gugunCd,
        @RequestParam(required = false) Integer actBeginTm,
        @RequestParam(required = false) Integer actEndTm,
        @RequestParam(required = false) String adultPosblAt,
        @RequestParam(required = false) String yngbgsPosblAt,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortField,
        @RequestParam(defaultValue = "ASC") Sort.Direction direction) {

        return volunteeringService.searchPrograms(
            progrmSj, nanmmbyNm, progrmBgnde, progrmEndde, sidoCd, gugunCd,
            actBeginTm, actEndTm, adultPosblAt, yngbgsPosblAt,
            page, size, sortField, direction);
    }



}
