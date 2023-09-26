package com.teamconnect.teamconnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamconnect.teamconnect.model.UserDetails;

@Repository
public interface UserRepo extends JpaRepository<UserDetails,Integer>{
    public  Optional<UserDetails> findByUserNameAndPassword(String userName,String password);
    
    public Optional<UserDetails> findByUserName(String userName);

}
