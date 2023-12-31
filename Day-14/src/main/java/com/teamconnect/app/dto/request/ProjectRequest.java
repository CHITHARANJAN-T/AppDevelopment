package com.teamconnect.app.dto.request;

import java.util.List;

import com.teamconnect.app.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {
    private Long pid;
    private String projectname;
    private List<User> members;
    private String description;
    private byte[] project;
}
