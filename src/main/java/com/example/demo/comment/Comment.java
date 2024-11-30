package com.example.demo.comment;

import com.example.demo.user.SiteUser;
import com.example.demo.volunteer.Volunteering;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id", nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String content;

    @JoinColumn(name = "volunteer_id", nullable = false)
    private String volunteerId;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();


//    @Enumerated(EnumType.STRING)
////    @Column(columnDefinition = "USER")
//    private UserRole role = UserRole.USER;
}
