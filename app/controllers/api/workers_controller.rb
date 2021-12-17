class Api::WorkersController < ApplicationController
  before_action :set_worker, only: [:show, :update, :destroy]
  def index
    render json: Worker.all
  end

  def show 
    render json: @worker
  end

  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      render json: @worker
    else
      render json: { errors: @worker.errors }, status: :unprocessable_entity
    end
  end

  def udpate
    if @worker.update(worker_params)
      render json: @worker
    else 
      render json: { errors: @worker.errors }, status: :unprocessable_entity
  end

  def destroy
    @worker.destory
    render json: { message: 'Worker Deleted'}
  end

  private
  def worker_params
    params.require(:worker_name).permit(:name, :employee, :title)
  end
  
  def set_worker
    @worker = Worker.find(params[:id])
  end

end
