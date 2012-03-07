# Do not edit this file - Generated by Perlito5 8.0
use v5;
use utf8;
use strict;
use warnings;
no warnings ('redefine', 'once', 'void', 'uninitialized', 'misc', 'recursion');
use Perlito5::Perl5::Runtime;
our $MATCH = Perlito5::Match->new();
package main;
use v5;
package Perlito5::AST::CompUnit;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $env1) = [{}, @{$env}]);
    for my $stmt (@{$self->{'body'}}) {
        $stmt->eval($env1)
    }
};
package Perlito5::AST::Val::Int;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    (0 + $self->{'int'})
};
package Perlito5::AST::Val::Num;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    (0 + $self->{'num'})
};
package Perlito5::AST::Val::Buf;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    $self->{'buf'}
};
package Perlito5::AST::Lit::Block;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $env1) = [{}, @{$env}]);
    for my $stmt (@{$self->{'stmts'}}) {
        $stmt->eval($env1)
    }
};
package Perlito5::AST::Index;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ($self->{'obj'}->eval($env))->[$self->{'index_exp'}->eval($env)]
};
package Perlito5::AST::Lookup;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ($self->{'obj'}->eval($env))->{$self->{'index_exp'}->eval($env)}
};
package Perlito5::AST::Var;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $ns) = '');
    if (($self->{'namespace'})) {
        ($ns = ($self->{'namespace'} . '::'))
    }
    else {
        if (((($self->{'sigil'} eq chr(64))) && (($self->{'name'} eq 'ARGV')))) {
            return (@ARGV)
        }
    };
    ((my  $name) = ($self->{'sigil'} . $ns . $self->{'name'}));
    for my $e (@{$env}) {
        if ((exists($e->{$name}))) {
            return ($e->{$name})
        }
    };
    warn('Interpreter runtime error: variable ' . chr(39), $name, chr(39) . ' not found')
};
sub plain_name {
    ((my  $self) = $_[0]);
    if (($self->{'namespace'})) {
        return (($self->{'sigil'} . $self->{'namespace'} . '::' . $self->{'name'}))
    };
    return (($self->{'sigil'} . $self->{'name'}))
};
package Perlito5::AST::Proto;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ('' . $self->{'name'})
};
package Perlito5::AST::Call;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    warn('Interpreter TODO: Perlito5::AST::Call');
    ((my  $invocant) = $self->{'invocant'}->eval($env));
    if ((($invocant eq 'self'))) {
        ($invocant = chr(36) . 'self')
    };
    warn('Interpreter runtime error: method ' . chr(39), $self->{'method'}, '()' . chr(39) . ' not found')
};
package Perlito5::AST::Apply;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $ns) = '');
    if (($self->{'namespace'})) {
        ($ns = ($self->{'namespace'} . '::'))
    };
    ((my  $code) = ($ns . $self->{'code'}));
    for my $e (@{$env}) {
        if ((exists($e->{$code}))) {
            return (($e->{$code}->($env, @{$self->{'arguments'}})))
        }
    };
    warn('Interpreter runtime error: subroutine ' . chr(39), $code, '()' . chr(39) . ' not found')
};
package Perlito5::AST::If;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $cond) = $self->{'cond'});
    if (($cond->eval($env))) {
        ((my  $env1) = [{}, @{$env}]);
        for my $stmt (@{($self->{'body'})->stmts()}) {
            $stmt->eval($env1)
        }
    }
    else {
        ((my  $env1) = [{}, @{$env}]);
        for my $stmt (@{($self->{'otherwise'})->stmts()}) {
            $stmt->eval($env1)
        }
    };
    return (undef())
};
package Perlito5::AST::For;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $cond) = $self->{'cond'});
    ((my  $topic_name) = $self->{'body'}->sig()->plain_name());
    ((my  $env1) = [{}, @{$env}]);
    for my $topic (@{$cond->eval($env)}) {
        ($env1->[0] = {($topic_name => $topic)});
        for my $stmt (@{($self->{'body'})->stmts()}) {
            $stmt->eval($env1)
        }
    };
    return (undef())
};
package When;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    die('TODO - When')
};
package Perlito5::AST::While;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    die('TODO - Perlito5::AST::While')
};
package Perlito5::AST::Decl;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $decl) = $self->{'decl'});
    ((my  $name) = $self->{'var'}->plain_name());
    if ((!((exists(($env->[0])->{$name}))))) {
        (($env->[0])->{$name} = undef())
    };
    return (undef())
};
sub plain_name {
    ((my  $self) = $_[0]);
    $self->{'var'}->plain_name()
};
package Perlito5::AST::Sub;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    (my  @param_name);
    ((my  $sub) = sub  {
    ((my  $env) = shift());
    ((my  $args) = shift());
    (my  %context);
    ((my  $n) = 0);
    ($context{chr(64) . '_'} = $args);
    for my $name (@param_name) {
        ($context{$name} = ($args->[$n])->eval($env));
        ($n = ($n + 1))
    };
    ((my  $env1) = [%context, @{$env}]);
    (my  $r);
    for my $stmt (@{$self->{'block'}}) {
        ($r = $stmt->eval($env1))
    };
    return ($r)
});
    if (($self->{'name'})) {
        (($env->[0])->{$self->{'name'}} = $sub)
    };
    return ($sub)
};
package Perlito5::AST::Do;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    ((my  $env1) = [{}, @{$env}]);
    for my $stmt (@{$self->{'block'}}) {
        $stmt->eval($env1)
    }
};
package Perlito5::AST::Use;
sub eval {
    ((my  $self) = $_[0]);
    ((my  $env) = $_[1]);
    warn('Interpreter TODO: Perlito5::AST::Use');
    ('use ' . $self->{'mod'})
};

1;
