class Pet < ApplicationRecord

    belongs_to :user, optional: true

    # defaults within create PETS
    # set defaults before the create
    after_initialize :set_defaults

    # add the extra fields from state to here
    def set_defaults
        self.age = self.age || 1
    end

end
