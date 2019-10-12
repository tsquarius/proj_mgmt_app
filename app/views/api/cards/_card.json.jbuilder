json.extract! card, :id, :title, :order, :archived, :color, :due_date, :description
json.comments card.comments_array
json.tags card.tags_array