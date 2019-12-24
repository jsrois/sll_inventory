require "application_system_test_case"

class HomepageTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit root_url
    fill_in "Email", with: 'javi@example.com'
    fill_in "Password", with: '1234'
    click_on "Login"
    assert_selector "div", text: "Inventory"
  end
end
