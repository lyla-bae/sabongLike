package com.example.demo.volunteer;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/set/detail")
    public String setDetail() {
        volunteeringService.setDetailInfo();
        return "ok";

    }

    @GetMapping("/get")
    public Page<VolunteeringDto> getPrograms(
        @RequestParam(required = false) String progrmSj,
        @RequestParam(required = false) String nanmmbyNm,
        @RequestParam(required = false) Integer progrmBgnde,
        @RequestParam(required = false) Integer progrmEndde,
        @RequestParam(required = false) List<Integer> sidoCd,
        @RequestParam(required = false) List<Integer>  gugunCd,
        @RequestParam(required = false) Integer actBeginTm,
        @RequestParam(required = false) Integer actEndTm,
        @RequestParam(required = false) String adultPosblAt,
        @RequestParam(required = false) String yngbgsPosblAt,
        @RequestParam(required = false) Boolean isOnline,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortField,
        @RequestParam(defaultValue = "ASC") Direction direction) {
        System.out.println("Received sidoCds: " + sidoCd);

        return volunteeringService.searchPrograms(
            progrmSj, nanmmbyNm, progrmBgnde, progrmEndde, sidoCd, gugunCd,
            actBeginTm, actEndTm, adultPosblAt, yngbgsPosblAt, false,
            page-1, size, sortField, direction);
    }

    @GetMapping("/detail/{progrmRegistNo}")
    public ResponseEntity<Volunteering> getDetail(@PathVariable Integer progrmRegistNo) {
        Optional<Volunteering> volunteering = volunteeringService.findByProgrmRegistNo(progrmRegistNo);

        Volunteering v = volunteering.orElseThrow(() -> new EntityNotFoundException("Volunteering not found with id: " + progrmRegistNo));
        return ResponseEntity.ok(v);


    }





}
