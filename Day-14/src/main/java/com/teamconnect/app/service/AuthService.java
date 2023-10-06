package com.teamconnect.app.service;

import com.teamconnect.app.dto.request.AuthenticationRequest;
import com.teamconnect.app.dto.request.RegisterRequest;
import com.teamconnect.app.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
