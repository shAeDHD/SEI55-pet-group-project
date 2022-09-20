class Pet < ApplicationRecord

    belongs_to :user, optional: true

    # defaults within create PETS
    # set defaults before the create
    after_initialize :set_defaults

    # add the extra fields from state to here
    # This renders default values for new Pets in the backend
    # Sets initial states for all except name and species which front end define
    def set_defaults
        self.age = self.age || 1
        self.experience = self.experience || 1
        self.level = self.level || 1
        self.last_drank = self.last_drank || 0
        self.last_fed = self.last_fed || 0
        self.last_slept = self.last_slept || 0
        self.last_fought = self.last_fought || 0
        self.last_stretched = self.last_stretched || 0
    end

end
