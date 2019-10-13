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

ActiveRecord::Schema.define(version: 2019_10_12_201635) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_columns", force: :cascade do |t|
    t.integer "board_id", null: false
    t.string "title", null: false
    t.integer "order", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_columns_on_board_id"
  end

  create_table "boards", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.integer "collection_id", null: false
    t.integer "order", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_boards_on_author_id"
    t.index ["collection_id"], name: "index_boards_on_collection_id"
  end

  create_table "cards", force: :cascade do |t|
    t.integer "author_id", null: false
    t.boolean "archived", default: false, null: false
    t.string "title", null: false
    t.string "color"
    t.date "due_date"
    t.text "description"
    t.integer "board_column_id", null: false
    t.integer "order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_cards_on_author_id"
    t.index ["board_column_id"], name: "index_cards_on_board_column_id"
  end

  create_table "collections", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_collections_on_author_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.text "body", null: false
    t.integer "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["card_id"], name: "index_comments_on_card_id"
  end

  create_table "members", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "collection_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "collection_id"], name: "index_members_on_member_id_and_collection_id", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.string "color"
    t.integer "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_tags_on_card_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
