
""" A component that designates a resistor. """

from graph import Node, Edge
from component import Component
from config import Config

class Resistor(Component):
    """ Resistor component """
    def __init__(self, graph, resistance, node_a=None, node_b=None, edge_i=None):
        """ Initializes a resistor with two nodes.  Current goes from
        A to B.  If nodes / edges aren't supplied, new ones are created.
        Supplied nodes / edges should be part of the supplied graph.

        Args:
            resistance : float
            graph : Graph object
            node_a : Node object
            node_b : Node object
            edge_i : Edge object

        Returns:
            Resistor object
        """
        if not node_a:
            node_a = Node(graph)
        if not node_b:
            node_b = Node(graph)
        if not edge_i:
            edge_i = Edge(graph)

        self._node_a = node_a
        self._node_b = node_b
        self._edge_i = edge_i
        self._resistance = resistance

    def node_a(self):
        """ Returns node A.

        Returns:
            Node object
        """
        return self._node_a

    def node_b(self):
        """ Returns node B.

        Returns:
            Node object
        """
        return self._node_b

    def edge_i(self):
        """ Returns the edge that stores current from A to B.

        Returns:
            Edge object
        """
        return self._edge_i

    def variables(self):
        """ Returns a set of variables under constraints.

        Returns:
            set of nodes and edges
        """
        return set([self._node_a, self._node_b, self._edge_i])

    def constraints(self):
        """ Returns a list of constraints that must be solved.
        A constraint is a tuple (function, variables), where
        function is a function taking values of nodes and edges and
        variables is a list of the Node and Edge objects.

        Returns:
            List of tuples (function, variables)
        """
        def ohms_law(voltage_a, voltage_b, current_i):
            voltage_drop = voltage_a - voltage_b
            expected_current = float(voltage_drop) / self._resistance
            return abs(current_i - expected_current) < Config.epsilon
        return [(ohms_law, [self._node_a, self._node_b, self._edge_i])]