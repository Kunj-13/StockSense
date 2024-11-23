import unittest
from app.run import create_app

class TestAuthentication(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        """Set up the test client and any required resources."""
        cls.app = create_app()
        cls.client = cls.app.test_client()

    def test_protected_endpoint_valid_token(self):
        """Test access to a protected endpoint with a valid token."""
        valid_token = "Bearer valid-token"
        headers = {"Authorization": valid_token}
        response = self.client.get('/protected-endpoint', headers=headers)
        self.assertEqual(response.status_code, 200)
        self.assertIn('message', response.json)
        self.assertEqual(response.json['message'], 'Access granted')

    def test_protected_endpoint_invalid_token(self):
        """Test access to a protected endpoint with an invalid token."""
        invalid_token = "Bearer invalid-token"
        headers = {"Authorization": invalid_token}
        response = self.client.get('/protected-endpoint', headers=headers)
        self.assertEqual(response.status_code, 401)
        self.assertIn('error', response.json)
        self.assertEqual(response.json['error'], 'Unauthorized')

    def test_protected_endpoint_no_token(self):
        """Test access to a protected endpoint with no token."""
        response = self.client.get('/protected-endpoint')
        self.assertEqual(response.status_code, 401)
        self.assertIn('error', response.json)
        self.assertEqual(response.json['error'], 'Missing authorization token')

if __name__ == "__main__":
    unittest.main()
