package com.teamconnect.teamconnect.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamconnect.teamconnect.model.UserDetails;
import com.teamconnect.teamconnect.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public boolean createUser(UserDetails userDetails){
            if(userRepo.findByUserName(userDetails.getUserName()).isPresent()){
                return false;
            }
            userRepo.save(userDetails);
            return true;
    }

    public UserDetails getDetails(UserDetails userDetails){
        Optional<UserDetails> user = userRepo.findByUserNameAndPassword(userDetails.getUserName(), userDetails.getPassword());

        if(user.isPresent())
            return user.get();

        return null;
    }

    public List<UserDetails> getDemo(){
        return userRepo.findAll();
    }

    public boolean updateDetails(UserDetails userDetails,int id){
        Optional<UserDetails> user = userRepo.findById(id);

        if(user.isPresent()){
            UserDetails u = user.get();
            if(userDetails.getEmail() != null)
            u.setEmail(userDetails.getEmail());

            if(userDetails.getPassword() != null)
            u.setPassword(userDetails.getPassword());

            if(userDetails.getUserName() != null)
            u.setUserName(userDetails.getUserName());

            userRepo.save(u);
            return true;
        }

        return false;
    }

    public boolean deleteUser(int userId){
        userRepo.deleteById(userId);

        if(userRepo.findById(userId).isPresent())
            return false;
        else
            return true;
     }
}
