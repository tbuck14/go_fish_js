const RANKS = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
    this.value = RANKS.indexOf(this.rank)
  }
}
