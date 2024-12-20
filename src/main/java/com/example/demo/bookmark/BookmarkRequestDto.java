package com.example.demo.bookmark;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookmarkRequestDto {
    private Long userId;
    private Long volunteeringId;
}




