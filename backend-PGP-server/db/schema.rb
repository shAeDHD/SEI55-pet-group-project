# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_17_102433) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "style"
  end

  create_table "moves", force: :cascade do |t|
    t.string "name"
    t.boolean "offensive"
    t.integer "attack"
    t.string "ability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "type"
    t.boolean "accessories"
    t.integer "level"
    t.integer "experience"
    t.integer "last_fed"
    t.integer "last_fought"
    t.integer "last_slept"
    t.integer "last_stretched"
    t.integer "last_drank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "species"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.text "email"
    t.string "display_name"
    t.boolean "premium"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
