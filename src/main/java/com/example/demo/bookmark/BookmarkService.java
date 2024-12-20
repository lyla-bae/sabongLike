package com.example.demo.bookmark;


import com.example.demo.user.SiteUser;
import com.example.demo.user.SiteUserRepository;
import com.example.demo.volunteer.Volunteering;
import com.example.demo.volunteer.VolunteeringRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;

    @Autowired
    private VolunteeringRepository volunteeringRepository;

    @Autowired
    private SiteUserRepository siteUserRepository; // SiteUserRepository 추가


    public List<Bookmark> getBookmarksForUser(Long userId) {
        // 사용자 정보 가져오기
        SiteUser user = siteUserRepository.findById(Math.toIntExact(userId))
            .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

        // 사용자의 북마크 조회
        return bookmarkRepository.findByUser(user);
    }

    public void addBookmark(Long volunteeringId, Long userId) {

        SiteUser user = siteUserRepository.findById(Math.toIntExact(userId))
            .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

        Volunteering volunteering = volunteeringRepository.findByProgrmRegistNo(
                Math.toIntExact(volunteeringId))
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 봉사활동 ID입니다."));



        if (bookmarkRepository.existsByUserAndVolunteering(user, volunteering)) {
            throw new IllegalArgumentException("이미 북마크에 추가된 항목입니다.");
        }
        // 새로운 북마크 객체 생성
        Bookmark bookmark = new Bookmark();
        bookmark.setUser(user);
        bookmark.setVolunteering(volunteering);
        bookmark.setCreatedAt(LocalDateTime.now());

        // 북마크 저장
        bookmarkRepository.save(bookmark);
    }

    public void removeBookmark(Long volunteeringId, Long userId) {
        Optional<Volunteering> volunteeringOptional= volunteeringRepository.findByProgrmRegistNo(
            Math.toIntExact(volunteeringId));

        Optional<Bookmark> bookmarkOptional = bookmarkRepository
            .findByVolunteeringIdAndUserId(volunteeringOptional.get().getId(), userId);

        if (bookmarkOptional.isPresent()) {
            Bookmark bookmark = bookmarkOptional.get();
            bookmarkRepository.delete(bookmark);
        } else {
            throw new IllegalArgumentException("Bookmark not found with Volunteering ID: " + volunteeringId + " and Name: " + userId);
        }
    }


    public boolean checkBookmarkExists(Long userId, Long volunteeringId) {
        SiteUser user = siteUserRepository.findById(Math.toIntExact(userId))
            .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

        Volunteering volunteering = volunteeringRepository.findByProgrmRegistNo(
                Math.toIntExact(volunteeringId))
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 봉사활동 ID입니다."));

        return bookmarkRepository.existsByUserAndVolunteering(user, volunteering);
    }
}


