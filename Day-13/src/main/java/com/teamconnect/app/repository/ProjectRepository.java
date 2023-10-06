package com.teamconnect.app.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamconnect.app.model.Projects;



public interface ProjectRepository extends JpaRepository<Projects,Long>{
    Optional<Projects> findByProjectname(String projectname);

    Projects  findByPid(Long pid);

    void deleteByPid(Long pid);
}
