package com.example.demo.volunteer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VolunteeringRepository extends JpaRepository<Volunteering, Integer> {
    @Override
    List<Volunteering> findAll();

    List<Volunteering> findByGugunCd(Integer gugunCd);

    Optional<Volunteering> findById(Long id);


    Page<Volunteering> findAll(Specification<Volunteering> spec, Pageable pageable);

}
