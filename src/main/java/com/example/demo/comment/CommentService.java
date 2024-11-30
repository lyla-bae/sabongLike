package com.example.demo.comment;

import com.example.demo.AuthUtil;
import com.example.demo.DataNotFoundException;
import com.example.demo.volunteer.Volunteering;
import com.example.demo.volunteer.VolunteeringRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    // 댓글 생성 메서드
    // Volunteer ID로 모든 댓글 가져오기
    public List<CommentDto> getCommentsByVolunteerId(String volunteerId) {
        List<Comment> comments = commentRepository.findByVolunteerId(volunteerId);
        return comments.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // Comment -> CommentDto 변환
    private CommentDto convertToDto(Comment comment) {
        return CommentDto.builder()
                .volunteer_id(comment.getVolunteerId())
                .content(comment.getContent())
                .user_id(1L)
                .build();
    }

    @Transactional
    public Comment createComment(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setContent(commentDto.getContent());
        comment.setUserId(1L);
        comment.setVolunteerId(commentDto.getVolunteer_id());

        return commentRepository.save(comment);
    }

    // 댓글 삭제
    public void deleteComment(String id) {
        if (!commentRepository.existsById(id)) {
            throw new DataNotFoundException("Comment not found");
        }
        commentRepository.deleteById(id);
    }


}