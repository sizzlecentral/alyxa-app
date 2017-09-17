class Company < ApplicationRecord

  def as_json(options = { })
    {
      "company" => { "id" => self.id.to_s, "name" => self.name.to_s, "url" => self.url.to_s, "image" => self.image.to_s }
    }
  end

end
