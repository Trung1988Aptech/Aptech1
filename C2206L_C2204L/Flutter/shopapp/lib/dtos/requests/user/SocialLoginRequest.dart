class SocialLoginRequest {
  final String? phoneNumber;
  final String? email;
  final String? facebookAccountId;
  final String? googleAccountId;
  final String? fullname;
  final String? profileImage;
  final int roleId;

  SocialLoginRequest({
    this.phoneNumber,
    this.email,
    this.facebookAccountId,
    this.googleAccountId,
    this.fullname,
    this.profileImage,
    int? roleId,
  })  :
        assert(phoneNumber != null ||
            email != null ||
            facebookAccountId != null ||
            googleAccountId != null ||
            fullname != null ||
            profileImage != null,
        'At least one identifier or personal info must be provided'),
        roleId = roleId ?? 1; // Default value for roleId if not provided

  Map<String, dynamic> toJson() {
    return {
      'phone_number': phoneNumber ?? '',
      'email': email ?? '',
      'facebook_account_id': facebookAccountId ?? '',
      'google_account_id': googleAccountId ?? '',
      'fullname': fullname ?? '',
      'profile_image': profileImage ?? '',
      'role_id': roleId,
    };
  }
}
