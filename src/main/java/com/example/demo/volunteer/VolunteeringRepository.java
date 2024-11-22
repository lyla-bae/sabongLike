package com.example.demo.volunteer;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteeringRepository extends JpaRepository<Volunteering, Integer> {
    @Override
    List<Volunteering> findAll();

    List<Volunteering> findByGugunCd(Integer location);

    Page<Volunteering> findAll(Specification<Volunteering> spec, Pageable pageable);
}
