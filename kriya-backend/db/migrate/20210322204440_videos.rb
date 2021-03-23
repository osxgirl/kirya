class Videos < ActiveRecord::Migration[5.2]
  def change
      create_table :videos do |t|
              t.string :name
              t.string :url
   end
  end
end
