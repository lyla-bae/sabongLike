package com.example.demo.volunteer;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class VolunteertingSpecification {

    public static Specification<Volunteering> filterByCriteria(
        String progrmSj, String nanmmbyNm, Integer progrmBgnde, Integer progrmEndde,
        Integer sidoCd, Integer gugunCd, Integer actBeginTm, Integer actEndTm,
        String adultPosblAt, String yngbgsPosblAt) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (progrmSj != null) {
                predicates.add(criteriaBuilder.like(root.get("progrmSj"), "%" + progrmSj + "%"));
            }
            if (nanmmbyNm != null) {
                predicates.add(criteriaBuilder.equal(root.get("nanmmbyNm"), nanmmbyNm));
            }
            if (progrmBgnde != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("progrmBgnde"), progrmBgnde));
            }
            if (progrmEndde != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("progrmEndde"), progrmEndde));
            }
            if (sidoCd != null) {
                predicates.add(criteriaBuilder.equal(root.get("sidoCd"), sidoCd));
            }
            if (gugunCd != null) {
                predicates.add(criteriaBuilder.equal(root.get("gugunCd"), gugunCd));
            }
            if (actBeginTm != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("actBeginTm"), actBeginTm));
            }
            if (actEndTm != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("actEndTm"), actEndTm));
            }
            if (adultPosblAt != null) {
                predicates.add(criteriaBuilder.equal(root.get("adultPosblAt"), adultPosblAt));
            }
            if (yngbgsPosblAt != null) {
                predicates.add(criteriaBuilder.equal(root.get("yngbgsPosblAt"), yngbgsPosblAt));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}