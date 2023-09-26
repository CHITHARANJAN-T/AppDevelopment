package com.teamconnect.teamconnect.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teamconnect.teamconnect.model.UserDetails;
import com.teamconnect.teamconnect.service.UserService;

@RestController
public class AppController {

    @Autowired
    private UserService userService;

    //User Details
    @PostMapping(value = "/createuser")
    public boolean createUser(@RequestBody UserDetails userDetails){
        return userService.createUser(userDetails);
    }

    @PostMapping(value = "/login")
    public UserDetails getDetails(@RequestBody UserDetails userDetails){
        return userService.getDetails(userDetails);
    }

    @GetMapping(value="/get")
    public List<UserDetails> getDemo(){
        return userService.getDemo();
    }

    @PutMapping(value = "/updateuser/{userId}")
    public boolean updateDetails(@RequestBody UserDetails userDetails,@PathVariable(name="userId")int userId ){
        return userService.updateDetails(userDetails, userId);
    }

    @DeleteMapping(value = "/deleteuser/{userId}")
    public boolean deleteUser(@PathVariable(name = "userId")int userId){
        return userService.deleteUser(userId);
    }
}
