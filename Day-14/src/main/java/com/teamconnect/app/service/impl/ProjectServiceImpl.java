package com.teamconnect.app.service.impl;

import org.springframework.stereotype.Service;

import com.teamconnect.app.dto.request.CreateProjectRequest;
import com.teamconnect.app.dto.request.ProjectRequest;
import com.teamconnect.app.dto.response.ProjectResponse;
import com.teamconnect.app.model.Projects;
import com.teamconnect.app.model.User;
import com.teamconnect.app.repository.ProjectRepository;
import com.teamconnect.app.repository.UserRepository;
import com.teamconnect.app.service.ProjectService;

import java.util.*;
import java.util.stream.Collectors;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService{
    
    private final ProjectRepository projectRepository;

    private final UserRepository userRepository;

    @Override
    public List<ProjectResponse> getAllProject(){
        List<Projects> projectList = projectRepository.findAll();

        return projectList.stream()
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public ProjectResponse getProjectById(long pid){
        Projects projects = projectRepository.findById(pid).get();
        return mapUserToUserResponse(projects);

    }
    
    @Override
    public String createProject(CreateProjectRequest createProjectRequest){
        Optional<Projects> isProjectExists = projectRepository.findByProjectname(createProjectRequest.getProjectname());
        if(!isProjectExists.isPresent()){
           var project = Projects.builder()
                        .projectname(createProjectRequest.getProjectname())
                        .project(null)
                        .members(createProjectRequest.getMembers())
                        .description(createProjectRequest.getDescription())
                        .build();

            System.out.println(createProjectRequest.getProjectname());
            projectRepository.save(project);
            return "Project Created Sucessfully";


        }
        return "Project Name Already Existed!";
    }

    @Override
    public ProjectResponse updateProject(long pid,ProjectRequest projectRequest){

        Projects projects = projectRepository.findByPid(pid);
        projects.setProjectname(projectRequest.getProjectname());
        projects.setMembers(projectRequest.getMembers());
        projects.setDescription(projectRequest.getDescription());
        projectRequest.setProject(projectRequest.getProject());
        
        projectRepository.save(projects);

        return mapUserToUserResponse(projects);
    }

    @Override
    public ProjectResponse addMembers(long pid,long uid){

        Projects projects = projectRepository.findByPid(pid);
        User user = userRepository.findByUid(uid);
        List<User> users = projects.getMembers();
        users.add(user);
        projects.setMembers(users);

        projectRepository.save(projects);
        return mapUserToUserResponse(projects);
    }

    private ProjectResponse mapUserToUserResponse(Projects projects) {

        return ProjectResponse.builder()
                .pid(projects.getPid())
                .projectname(projects.getProjectname())
                .project(null)
                .members(projects.getMembers())
                .description(projects.getDescription())
                .build();
    }

}
