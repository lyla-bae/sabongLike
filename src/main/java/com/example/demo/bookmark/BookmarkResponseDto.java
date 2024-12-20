package com.example.demo.bookmark;

import com.example.demo.volunteer.Volunteering;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
public class BookmarkResponseDto {
    private List<Volunteering> volunteeringList;
    private int totalPost;
}