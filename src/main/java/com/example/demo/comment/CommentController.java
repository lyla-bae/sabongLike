package com.example.demo.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/api/comment/")
@RequiredArgsConstructor
@RestController
public class CommentController {
    private final CommentService commentService;

    // Volunteer ID로 모든 댓글 가져오기
    @GetMapping("list/{id}")
    public ResponseEntity<List<CommentDto>> getAllCommentsByVolunteerId(@PathVariable String id) {
        List<CommentDto> comments = commentService.getCommentsByVolunteerId(id);
        return ResponseEntity.ok(comments);
    }

    @PostMapping("add/{id}")
    public ResponseEntity<Comment> createComment(@RequestBody CommentDto commentDto,@PathVariable String id) {
        commentDto.setVolunteer_id(id);
        Comment createdCommentId = commentService.createComment(commentDto);
        return ResponseEntity.ok(createdCommentId);
    }
}
