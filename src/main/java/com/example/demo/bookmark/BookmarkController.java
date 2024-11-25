package com.example.demo.bookmark;

import com.example.demo.user.UserService;
import com.example.demo.volunteer.VolunteeringService;
import java.security.Principal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/bookmark")

public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @Autowired
    private UserService siteUserService;

    @Autowired
    private VolunteeringService volunteeringService;

    // 북마크 추가
    @PostMapping("/add/{volunteeringId}")
    public ResponseEntity<String> addBookmark(@PathVariable Long volunteeringId, Principal principal) {
        try {
            bookmarkService.addBookmark(volunteeringId, principal.getName());
            return ResponseEntity.status(HttpStatus.CREATED).body("Bookmark added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // 북마크 삭제
    @DeleteMapping("/remove/{volunteeringId}")
    public ResponseEntity<String> removeBookmark(@PathVariable Long volunteeringId, Principal principal) {
        try {
            bookmarkService.removeBookmark(volunteeringId, principal.getName());
            return ResponseEntity.ok("Bookmark removed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error removing bookmark");
        }
    }
//
    // 북마크 목록 조회
    @GetMapping("/list")
    public ResponseEntity<List<Bookmark>> listBookmarks(Principal principal) {
        try {
            List<Bookmark> bookmarks = bookmarkService.getBookmarksForUser(principal.getName());
            return ResponseEntity.ok(bookmarks);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

//
//    @GetMapping("/check/{volunteeringId}")
//    public ResponseEntity<Boolean> checkBookmark(@PathVariable Long volunteeringId, Principal principal) {
//        try {
//            // 로그인된 사용자 정보
//            SiteUser user = siteUserService.getUser(principal.getName());
//            // 봉사활동 정보 조회
//            Volunteering volunteering = volunteeringService.getVolunteeringById(volunteeringId);
//
//            // 북마크 여부 확인
//            boolean isBookmarked = bookmarkService.isBookmarked(user, volunteering);
//            return ResponseEntity.ok(isBookmarked);
//        } catch (Exception e) {
//            return ResponseEntity.status(404).body(false);  // 봉사활동이나 사용자 조회 실패 시 false 반환
//        }
//    }
}
