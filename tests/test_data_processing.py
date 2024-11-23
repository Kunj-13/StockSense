import unittest
from app.utils import process_data  # Replace with the actual module and function name

class TestDataProcessing(unittest.TestCase):

    def test_process_data_valid_input(self):
        """Test data processing with valid input."""
        input_data = {"numbers": [1, 2, 3, 4, 5]}
        expected_output = {"sum": 15, "average": 3.0}
        actual_output = process_data(input_data)
        self.assertEqual(actual_output, expected_output)

    def test_process_data_empty_input(self):
        """Test data processing with empty input."""
        input_data = {"numbers": []}
        expected_output = {"sum": 0, "average": None}
        actual_output = process_data(input_data)
        self.assertEqual(actual_output, expected_output)

    def test_process_data_invalid_input(self):
        """Test data processing with invalid input."""
        input_data = {"numbers": "not_a_list"}
        with self.assertRaises(TypeError):
            process_data(input_data)

if __name__ == "__main__":
    unittest.main()
