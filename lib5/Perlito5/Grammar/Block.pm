# Do not edit this file - Generated by Perlito5 9.0
use v5.10;
use Perlito5::Perl5::Runtime;
package main;
package Perlito5::Grammar::Block;
use Perlito5::Expression;
Perlito5::Expression::add_statement('{', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
Perlito5::Expression::add_statement('BEGIN', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
Perlito5::Expression::add_statement('UNITCHECK', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
Perlito5::Expression::add_statement('CHECK', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
Perlito5::Expression::add_statement('INIT', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
Perlito5::Expression::add_statement('END', sub {
    Perlito5::Grammar::Block->term_block($_[0], $_[1])
});
sub Perlito5::Grammar::Block::term_block {
    ((my  $self) = $_[0]);
    ((my  $str) = $_[1]);
    ((my  $pos) = $_[2]);
    ((my  $p) = $pos);
    (my  $block_name);
    ((my  $m_name) = Perlito5::Grammar->ident($str, $p));
    if ($m_name) {
        ($p = $m_name->{'to'});
        ($block_name = Perlito5::Match::flat($m_name))
    };
    ((my  $m) = Perlito5::Grammar::Space->ws($str, $p));
    if ($m) {
        ($p = $m->{'to'})
    };
    if ((substr($str, $p, 1) eq '{')) {
        ((my  $m) = Perlito5::Expression->term_curly($str, $p));
        if ($m) {
            ((my  $v) = Perlito5::Match::flat($m));
            ($v = Perlito5::AST::Lit::Block->new('stmts', $v->[2], 'sig', $v->[3]));
            ($v = Perlito5::Expression::block_or_hash($v));
            if ((ref($v) eq 'Perlito5::AST::Lit::Block')) {
                ($v->{'name'} = $block_name);
                ($m->{'capture'} = $v);
                return ($m)
            }
        }
    };
    return (0)
};
1;

1;
