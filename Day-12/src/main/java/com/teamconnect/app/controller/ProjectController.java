package com.teamconnect.app.controller;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamconnect.app.constant.Api;
import com.teamconnect.app.dto.request.CreateProjectRequest;
import com.teamconnect.app.dto.request.ProjectRequest;
import com.teamconnect.app.dto.response.ProjectResponse;
import com.teamconnect.app.service.ProjectService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.PROJECT)
@RequiredArgsConstructor
@Tag(name = "Project")
public class ProjectController {

    private final ProjectService projectService;
    
    @PostMapping("/createProject")
    public ResponseEntity<String> createProject(@RequestBody CreateProjectRequest createProjectRequest){
        String response = projectService.createProject(createProjectRequest);
        return ResponseEntity.ok().body(response) ;
    }

    @PutMapping("/updateProject/{pid}")
    public ResponseEntity<ProjectResponse> updateProject(@RequestBody ProjectRequest projectRequest,@PathVariable("pid")Long pid){
        ProjectResponse projectResponse = projectService.updateProject(pid, projectRequest);
        return projectResponse != null ? ResponseEntity.ok(projectResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getProjectById/{pid}")
    public ResponseEntity<ProjectResponse> getProjectById(@PathVariable("pid")Long pid){
        ProjectResponse projectResponse = projectService.getProjectById(pid);
        return projectResponse != null ? ResponseEntity.ok(projectResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getAllProject")
    public ResponseEntity<List<ProjectResponse>> getAllProject(){
        List<ProjectResponse> projectResponse = projectService.getAllProject();
        return projectResponse != null ? ResponseEntity.ok(projectResponse) : ResponseEntity.notFound().build();
    }

}
