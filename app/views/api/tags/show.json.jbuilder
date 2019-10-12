json.tag do
  json.partial! 'api/tags/tag', tag: @tag
end

json.card do
  json.partial! 'api/cards/card', card: @tag.card
end