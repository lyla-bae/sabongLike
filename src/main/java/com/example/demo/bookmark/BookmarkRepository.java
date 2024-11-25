package com.example.demo.bookmark;


import com.example.demo.user.SiteUser;
import com.example.demo.volunteer.Volunteering;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    boolean existsByUserAndVolunteering(SiteUser user, Volunteering volunteering);

    Optional<Bookmark> findByVolunteeringIdAndUserLoginId(Long volunteeringId, String name);

    List<Bookmark> findByUser(SiteUser user);
}
