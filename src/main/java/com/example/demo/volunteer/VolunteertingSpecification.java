package com.example.demo.volunteer;

import jakarta.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

public class VolunteertingSpecification {

    public static Specification<Volunteering> filterByCriteria(
        String progrmSj, String nanmmbyNm, Integer progrmBgnde, Integer progrmEndde,
        List<Integer> sidoCd, List<Integer>  gugunCd, Integer actBeginTm, Integer actEndTm,
        String adultPosblAt, String yngbgsPosblAt, Boolean isOnline) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (isOnline) {
                Predicate onlinePredicate = criteriaBuilder.like(root.get("progrmSj"), "%" + "온라인" + "%");
                Predicate remotePredicate = criteriaBuilder.like(root.get("progrmSj"), "%" + "비대면" + "%");
                Predicate homePredicate = criteriaBuilder.like(root.get("progrmSj"), "%" + "재택" + "%");

                predicates.add(criteriaBuilder.or(onlinePredicate, remotePredicate, homePredicate));
            }
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
            if (sidoCd != null && !sidoCd.isEmpty()) {
                predicates.add(root.get("sidoCd").in(sidoCd));
            }
            if (gugunCd != null && !gugunCd.isEmpty()) {
                predicates.add(root.get("gugunCd").in(gugunCd));
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