import { Meteor } from 'meteor/meteor'

Meteor.methods({
    "movies.create": (movie) => {
        const id = Movies.insert(movie)
        return id
    },
    "movies.update": (id, movie) => {
        Movies.update({_id: id}, {$set: movie})
        return id
    },
    "movies.delete": (id) => {
        try {
            Movies.remove({_id: id})
        } catch (e) {
            throw new Error("Le film n'a pas pu être supprimé")
        }
        return true
    },
    "movies.all": () => {
        return Movies.find().fetch
    }
})
