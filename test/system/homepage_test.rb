require "application_system_test_case"

class HomepageTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit root_url
    fill_in "Name", with: 'admin'
    fill_in "Password", with: 'password'
    click_on "Login"
    assert_selector "div", text: "Inventory"
  end
end
