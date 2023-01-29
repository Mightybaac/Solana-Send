class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  def index
    @customers = Customer.all

    # Call the Solana functions
    checkBalance()
    sendTransaction()
  end

  # ... the rest of the controller code ...

  private

  # Load the Solana functions
  require 'solana'
  include Solana

  def checkBalance
    # ... the checkBalance function code ...
  end

  def sendTransaction
    # ... the sendTransaction function code ...
  end
end
