package com.example.demo.comment;
import com.example.demo.volunteer.Volunteering;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, String> {
    List<Comment> findByVolunteerId(String id);


}