import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: `-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIPInUHgAoH4YwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAwwmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjMx\nMDI5MDczMTU4WhcNMjMxMTE0MTk0NjU4WjAxMS8wLQYDVQQDDCZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAK28ziTYs0Geq2jCnIr41uLO++Nfm4du5pJK0k0YeaEzR4UU\nadmuzEFORZl60CEwtOBPhDXbMcj+iY8KTDp+tql276K8QSoZREamsviUkABJQCaM\niTFHW89H0v8rfoR32p9YJ1jSty6rQGxN5Vc2rmPFXorlIvchsPY+qv4iJ1oLJmUx\nhWLCIBn/wrf4ApLmtQviemneePl3PiVp4+tLSNBgiplvuYnGrFyesTuFda3OT/gP\n/P3FryFjoayFhwItDJcynG5S5EtAMYJEcEXTkudUIxRE3vfXQXvsLfILtVMH7R23\nzWFxIsGbp1zicQwlhlYK19J5OOacR9SWTqn4xYMCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAAI/Ig1KdApL8sWydX2W9QDSA52NYsrrrlbE+Vhmtdn0\nmYz+UkkOCgVDs6kSmZ01OnI+xs4UVmYIiICuH1l9ABRXBUKCNhs3xkflYnqDGJZT\nDHXZxXRgjF3/skqZYly+A7VJu1I2nO5IaTu2k5YJA4lWIrAxhRvBEnzh94+NzrO+\n4xnrIjoQrSg3QDsgE824cm6/isr9PcqLjzJuewWNNedIOtk6XfV6y5InjI7EQPIN\nuImEIgkIwpds0piEtk7ltJTKjjG7kUdrQ9yhFHqKmICnEnQHmrVLp6d/88PAlNVM\nGavm7+f4jv6A6ZiUidIFPnzI8hA/GUWouwRPduCP3Xs=\n-----END CERTIFICATE-----\n`
    });
  }

  async validate(payload) {
    console.log(payload);

    const user = {
      userId: payload.user_id,
      email: payload.email
    }

    return user; 
  }


}