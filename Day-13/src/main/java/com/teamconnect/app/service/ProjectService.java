package com.teamconnect.app.service;

import java.util.*;

import com.teamconnect.app.dto.request.CreateProjectRequest;
import com.teamconnect.app.dto.request.ProjectRequest;
import com.teamconnect.app.dto.response.ProjectResponse;

public interface ProjectService {
    
    public List<ProjectResponse> getAllProject();

    public ProjectResponse getProjectById(long pid); 

    public String createProject(CreateProjectRequest createProjectRequest);

    public ProjectResponse updateProject(long pid,ProjectRequest projectRequest);

    public ProjectResponse addMembers(long pid,long uid);

}
