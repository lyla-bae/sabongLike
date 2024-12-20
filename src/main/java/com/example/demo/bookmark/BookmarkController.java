package com.example.demo.bookmark;

import com.example.demo.user.UserService;
import com.example.demo.volunteer.Volunteering;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    @PostMapping("/add")
    public ResponseEntity<String> addBookmark(@RequestBody BookmarkRequestDto requestDto)  {
        try {
            bookmarkService.addBookmark(requestDto.getVolunteeringId(), requestDto.getUserId());
            return ResponseEntity.status(HttpStatus.CREATED).body("Bookmark added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // 북마크 삭제
    @DeleteMapping("/remove")
    public ResponseEntity<String> removeBookmark(@RequestBody BookmarkRequestDto requestDto) {
        try {
            bookmarkService.removeBookmark(requestDto.getVolunteeringId(), requestDto.getUserId());
            return ResponseEntity.ok("Bookmark removed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error removing bookmark");
        }
    }
//
    // 북마크 목록 조회
    @GetMapping("/list/{userId}")
    public ResponseEntity<BookmarkResponseDto> listVolunteering(@PathVariable Long userId) {
        try {
            List<Bookmark> bookmarks = bookmarkService.getBookmarksForUser(userId);

            // volunteering 리스트 추출
            List<Volunteering> volunteeringList = bookmarks.stream()
                .map(Bookmark::getVolunteering)
                .toList();

            // 응답 생성
            BookmarkResponseDto response = new BookmarkResponseDto(volunteeringList, volunteeringList.size());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/exists")
    public ResponseEntity<Boolean> checkBookmarkExists(@RequestBody BookmarkRequestDto requestDto) {
        try {
            boolean exists = bookmarkService.checkBookmarkExists(requestDto.getUserId(), requestDto.getVolunteeringId());
            return ResponseEntity.ok(exists);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }
}
