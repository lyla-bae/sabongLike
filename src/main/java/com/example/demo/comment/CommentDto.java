package com.example.demo.comment;
import lombok.*;
import org.apache.catalina.User;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDto {
//    private Long id;
    private String content;
    private Long user_id;
    private String volunteer_id;
//    private LocalDateTime createdAt;
}



