package com.teamconnect.app.service;

import java.util.List;

import com.teamconnect.app.dto.request.UserRequest;
import com.teamconnect.app.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

}
