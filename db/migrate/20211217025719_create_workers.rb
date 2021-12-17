class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name
      t.integer :employee
      t.text :title

      t.timestamps
    end
  end
end
