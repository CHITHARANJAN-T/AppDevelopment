package com.teamconnect.app.dto.response;

import lombok.Data;
import java.util.*;

import com.teamconnect.app.model.User;

import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponse {
    private Long pid;
    private String projectname;
    private List<User> members;
    private String description;
    private byte[] project;
}
