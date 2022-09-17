class User < ApplicationRecord

    belongs_to :pets, optional: true

end
